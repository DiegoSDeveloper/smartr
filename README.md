# smartr-ui — React form & data components

[![npm version](https://img.shields.io/npm/v/smartr-ui.svg)](https://www.npmjs.com/package/smartr-ui)
[![license](https://img.shields.io/npm/l/smartr-ui.svg)](./LICENSE)

A pragmatic component kit for building robust, data-heavy React apps: forms, tables, layout, validation, file inputs, and more — with strong TypeScript types and real-world ergonomics.

---

## Key Features

- **Typed form controls** with rich props (masking, icons, validation hooks, number/date/text modes, grouped selects, file inputs, etc.)
- **Powerful data table** with sorting, selection modes, badges, card/table view, pagination and auto data-loading
- **Grid layout primitives** (`Row`, `Column`, responsive sizes) for consistent page structure
- **Validation system** with built-in rules and custom async hooks on blur/change/submit
- **TypeScript first** with full type definitions
- **Bootstrap compatible** responsive design
- **Customizable configuration** with user-defined settings and themes

---

## Installation

```bash
npm install smartr-ui
```

**Peer dependencies:** `react` (>=16.8.0), `react-dom` (>=16.8.0)

> The library expects Bootstrap 5 CSS to be loaded in the host app for the default class names to render correctly. You can override every class through `configManager.setConfig(...)`.

---

## Quick Start

```tsx
import React from "react";
import { Row, Editor, Input, ColumnSize } from "smartr-ui";

function ExampleForm() {
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    birthDate: "",
  });

  return (
    <Row>
      <Editor
        id="name"
        title="Full name"
        required
        type={Input.Text}
        sm={ColumnSize.Col12}
        md={ColumnSize.Col6}
        formState={form}
        dispatchFormState={setForm}
      />
      <Editor
        id="email"
        title="Email"
        type={Input.Email}
        sm={ColumnSize.Col12}
        md={ColumnSize.Col6}
        formState={form}
        dispatchFormState={setForm}
      />
    </Row>
  );
}
```

---

## Core Components

### Editor — The universal input component

`Editor` handles multiple input types through a single component:

```tsx
// Text input with validation
<Editor
  type={Input.Text}
  title="Username"
  required
  min={3}
  max={50}
  invalidMessage="Username must be 3-50 characters"
/>

// Password with show/hide toggle
<Editor
  type={Input.Password}
  title="Password"
  enableShowPassword
  showPasswordIcon="eye"
  hidePasswordIcon="eye-off"
/>

// Select with options
<Editor
  type={Input.Select}
  title="Country"
  options={[
    { id: 'br', description: 'Brazil' },
    { id: 'us', description: 'United States' }
  ]}
  optionsId="id"
  optionsDescription="description"
/>

// File upload
<Editor
  type={Input.File}
  title="Document"
  accept=".pdf,.jpg,.png"
  maxFiles={3}
  maxFileSize={5242880} // 5MB
  onDownloadFileClick={handleDownload}
  onDeleteFileClick={handleDelete}
/>
```

### Async Select — server-side search with incremental loading

For large datasets, don't load the whole list upfront. Pass a `loadOptions` handler and the
dropdown becomes **asynchronous**: it loads one page at a time (default 20), searches on the
server as the user types (debounced), and loads more pages on scroll (infinite scroll,
accumulating results).

**The library never performs I/O.** It has no knowledge of URLs, headers, response formats or
authentication — it only decides *when* to ask for data (debounce, page counter, request
cancellation, caching, keyboard/ARIA, visual states). *How* to fetch is entirely up to the
consumer, through handlers:

```ts
type SmartOption = { id: any; description: string; [k: string]: any };

type LoadOptionsArgs = {
  search: string;      // debounced search term
  page: number;        // 1-based
  pageSize: number;
  signal: AbortSignal; // forward it to your fetch — the lib aborts superseded requests
};

type LoadOptionsResult = {
  options: SmartOption[];
  hasMore?: boolean;   // when omitted, inferred from options.length === pageSize
  total?: number;      // optional, if you know it
};
```

The backend lives in **your app**, not in the library:

```tsx
// Consumer (app) — the library never sees any of this:
const buscarClientes = async ({ search, page, pageSize, signal }) => {
  const url = `/api/v1/Customer/Filter?usePagination=true&page=${page}&pageSize=${pageSize}`
            + (search ? `&name=${encodeURIComponent(search)}` : "");
  const res = await fetch(url, { signal, headers: { Authorization: `Bearer ${token}` } });
  const options = (await res.json()).map(c => ({ id: c.id, description: c.name }));
  const total = Number(res.headers.get("X-Total-Count") ?? 0);
  return { options, total };
};

const carregarClienteSelecionado = async (id, signal) => {
  const res = await fetch(`/api/v1/Customer/${id}`, { signal, headers: { Authorization: `Bearer ${token}` } });
  const c = await res.json();
  return c ? { id: c.id, description: c.name } : null;
};

<Editor
  id="customerId"
  type={Input.Select}
  loadOptions={buscarClientes}
  loadSelectedOption={carregarClienteSelecionado}
  pageSize={20}
  formState={form}
  dispatchFormState={setForm}
/>
```

**Editing existing records:** when the form opens with a value already set (e.g. an invoice's
`customerId`), that item is usually not in the first page. The component resolves its label
independently of pagination — either through `loadSelectedOption(value, signal)` or a
pre-resolved `selectedOption={{ id, description }}` — and keeps it visible and selected even
when the current search doesn't return it.

**`Input.FastSearch`** uses the same engine with autocomplete defaults — it only searches after
the user types (`minSearchLength: 1`, `loadOnOpen: false`):

```tsx
<Editor
  id="customerId"
  type={Input.FastSearch}
  loadOptions={buscarClientes}
  loadSelectedOption={carregarClienteSelecionado}
  formState={form}
  dispatchFormState={setForm}
/>
```

Without `loadOptions`, `Input.FastSearch` keeps its previous behavior (plain text input) and
`Input.Select` with in-memory `options` keeps filtering locally — no breaking changes.

| Prop                 | Type                                                     | Default                          | Notes                                                          |
| -------------------- | -------------------------------------------------------- | -------------------------------- | -------------------------------------------------------------- |
| `loadOptions`        | `(args: LoadOptionsArgs) => Promise<LoadOptionsResult>`  | —                                | **Enables async mode.** The lib calls it; you fetch.           |
| `loadSelectedOption` | `(value, signal) => Promise<SmartOption \| null>`        | —                                | Resolves the selected value's label outside loaded pages.      |
| `selectedOption`     | `SmartOption \| null`                                    | —                                | Alternative: hand over the already-resolved selected item.     |
| `pageSize`           | `number`                                                 | `20` (config)                    | Items requested per page.                                      |
| `searchDebounceMs`   | `number`                                                 | `300` (config)                   | Typing debounce before calling `loadOptions`.                  |
| `minSearchLength`    | `number`                                                 | `0` (Select) / `1` (FastSearch)  | Minimum characters before searching.                           |
| `loadOnOpen`         | `boolean`                                                | `true` (Select) / `false` (FastSearch) | Load page 1 when the dropdown opens.                    |
| `onSearchChange`     | `(search: string) => void`                               | —                                | Escape hatch: observe raw (non-debounced) typing.              |
| `onOpen`             | `() => void`                                             | —                                | Escape hatch: dropdown opened.                                 |
| `optionRenderer`     | `(option, isSelected, search) => ReactNode`              | —                                | Custom option rendering (same prop as the sync Select).        |
| `renderEmpty`        | `(search) => ReactNode`                                  | config text                      | Custom empty state.                                            |
| `renderError`        | `(error, retry) => ReactNode`                            | config text + retry link         | Custom error state.                                            |
| `renderLoading`      | `() => ReactNode`                                        | config text                      | Custom loading state.                                          |

Defaults live in `config.behavior.select` (`pageSize`, `searchDebounceMs`, `minSearchLength`,
`loadOnOpen`, `fastSearchMinSearchLength`, `fastSearchLoadOnOpen`) and texts/classes in
`config.components.select.texts` / `.classes` (`loadingText`, `loadingMoreText`, `noResultsText`,
`loadErrorText`, `retryText`, `minSearchText`, `optionActive`, `optionsMessage`, `optionsError`,
`optionsRetry`, `optionsSentinel`) — all overridable via `configManager`.

### Table — Advanced data display

```tsx
import { Table, AlignType } from "smartr-ui";

const columns = [
  { header: "Name", accessor: "name" },
  { header: "Email", accessor: "email" },
  {
    header: "Status",
    accessor: "status",
    headerAlign: AlignType.CENTER,
    contentAlign: AlignType.CENTER,
    displayBadge: true,
  },
];

function DataTable() {
  return <Table columns={columns} data={userData} pagination pageSize={10} />;
}
```

#### Scroll & sticky header (opcional)

Por padrão a Table **não tem scroll** e o header rola junto — comportamento idêntico ao anterior, sem breaking changes. Para habilitar scroll vertical com header fixo:

```tsx
<Table
  columns={columns}
  data={rows}
  scrollable          // habilita overflow vertical
  scrollHeight={500}  // px (default "400px" se omitido). Aceita string ("60vh") ou number.
  stickyHeader        // <thead> com position: sticky; top: 0
/>
```

| Prop           | Tipo                  | Default       | Notas                                                  |
| -------------- | --------------------- | ------------- | ------------------------------------------------------ |
| `scrollable`   | `boolean`             | `false`       | Sem efeito quando `viewMode = CARD`.                   |
| `scrollHeight` | `string \| number`    | `"400px"`     | Só usado quando `scrollable=true`. Number vira `px`.   |
| `stickyHeader` | `boolean`             | `false`       | Funciona independente de `scrollable`.                 |

### Alert — Contextual feedback messages

```tsx
import { Alert, AlertType } from "smartr-ui";

function AlertExamples() {
  return (
    <>
      <Alert type={AlertType.Success}>
        <strong>Success!</strong> Operation completed successfully.
      </Alert>
      <Alert type={AlertType.Warning}>
        <strong>Warning!</strong> Please check your input.
      </Alert>
      <Alert type={AlertType.Danger}>
        <strong>Error!</strong> Something went wrong.
      </Alert>
      <Alert type={AlertType.Info}>
        <strong>Info:</strong> This is an informational message.
      </Alert>
    </>
  );
}
```

### Layout components

```tsx
import { Row, Column, Container } from "smartr-ui";

function LayoutExample() {
  return (
    <Container>
      <Row>
        <Column sm={12} md={6} lg={4}>
          {/* Content */}
        </Column>
        <Column sm={12} md={6} lg={8}>
          {/* Content */}
        </Column>
      </Row>
    </Container>
  );
}
```

---

## Supported `Input` types

The `Input` enum is the single switch for the `Editor` component. Each value maps to a specific HTML element/behavior:

| `Input` value     | Renders as                          | Notes                                                              |
| ----------------- | ----------------------------------- | ------------------------------------------------------------------ |
| `Input.Text`      | `<input type="text">`               | Supports `characterCasing` (Upper / Lower / Normal)                |
| `Input.LongText`  | `<textarea>`                        | `rows` prop controls height                                        |
| `Input.Password`  | `<input type="password">`           | `enableShowPassword` toggles to `text`                             |
| `Input.Email`     | `<input type="email">`              | Default email icon                                                 |
| `Input.FastSearch`| async dropdown (or `<input type="text">`) | With `loadOptions`: server-side autocomplete (see Async Select). Without: plain text input |
| `Input.Integer`   | `<input type="number">`             | Honors `min` / `max` as numeric bounds                              |
| `Input.Decimal`   | `<input type="text">` (masked)      | Configurable thousands/decimal separators and decimal places       |
| `Input.Money`     | `<input type="text">` (masked)      | Currency icon prepended                                            |
| `Input.Percent`   | `<input type="text">` (masked)      | `%` icon                                                           |
| `Input.Date`      | `<input type="date">`               | `minDate` / `maxDate` accepted as `Date` or `YYYY-MM-DD` string    |
| `Input.DateTime`  | `<input type="datetime-local">`     | `minDate` / `maxDate` as `Date` or `YYYY-MM-DDTHH:MM` string       |
| `Input.Month`     | `<input type="month">`              | `minDate` / `maxDate` as `Date` or `YYYY-MM` string                |
| `Input.Week`      | `<input type="week">`               | `minDate` / `maxDate` as ISO week string `YYYY-Www`                |
| `Input.Time`      | `<input type="text">` + mask        | Custom masked text (legacy). Use existing field; native picker not exposed. |
| `Input.Phone`     | `<input type="tel">` + mask         | Default mask from config                                           |
| `Input.Mobile`    | `<input type="tel">` + mask         | Same as Phone with mobile icon                                     |
| `Input.Fax`       | `<input type="tel">` + mask         |                                                                    |
| `Input.Url`       | `<input type="url">`                | Default link icon                                                  |
| `Input.Color`     | `<input type="color">`              | Native color picker, value as `#rrggbb`                            |
| `Input.Range`     | `<input type="range">`              | Numeric `min` / `max` / `step` (allows `min=0`); value is `Float`  |
| `Input.CheckBox`  | `<input type="checkbox">`           | Boolean value                                                      |
| `Input.Radio`     | `<input type="radio">`              | Auto-generates `name` if not provided                              |
| `Input.Select`    | `<select>` (or filterable Select)   | Supports grouping, multi-select, custom renderer, search. With `loadOptions`: async server-side search (see Async Select) |
| `Input.File`      | `<input type="file">`               | Multi-file, `accept`, `maxFileSize`, download/delete callbacks     |
| `Input.Hidden`    | `<input type="hidden">`             | Skips events; participates in form state                           |
| `Input.Label`     | Read-only label                     | Renders the value as static text (`form-control-plaintext`), keeping title/layout |

### HTML input types — coverage notes

| HTML5 input                   | Status     | Notes                                                                                                |
| ----------------------------- | ---------- | ---------------------------------------------------------------------------------------------------- |
| `<input type="time">`         | ⚠️ Partial | `Input.Time` ships as a masked text input. Native `type="time"` picker is not exposed (open an issue if needed). |
| `<input type="image">`        | ❌ Missing  | Image submit button — rarely used in form kits, not on the roadmap.                                  |

All other standard HTML5 input types (`text`, `password`, `email`, `number`, `tel`, `search`, `url`, `date`, `datetime-local`, `month`, `week`, `color`, `range`, `file`, `checkbox`, `radio`, `hidden`, `select`, `textarea`) are mapped through the `Input` enum.

### Examples — the inputs added in 1.0.17

```tsx
// URL field
<Editor type={Input.Url} title="Website" placeholder="https://…" />

// Native datetime-local picker (accepts Date instance directly)
<Editor
  type={Input.DateTime}
  title="Scheduled at"
  formState={form}
  dispatchFormState={setForm}
  minDate={new Date()}
/>

// Native month picker
<Editor type={Input.Month} title="Reference month" />

// ISO week picker (string value, e.g. "2026-W19")
<Editor type={Input.Week} title="Week" />

// Color picker (value is "#rrggbb")
<Editor type={Input.Color} title="Brand color" />

// Range slider (numeric value; supports min=0)
<Editor
  type={Input.Range}
  title="Volume"
  min={0}
  max={100}
  step={5}
/>
```

---

## Advanced Features

### Form-state binding

`Editor` supports three binding modes — pick the one that matches your data shape:

```tsx
// 1. Object form (most common)
<Editor id="email" formState={form} dispatchFormState={setForm} />

// 2. Single-value state
<Editor id="search" state={query} dispatchState={setQuery} />

// 3. List of objects (for dynamic rows / repeating sections)
<Editor
  id="email"
  listFormState={contacts}
  listFormIndex={i}
  dispatchListFormState={setContacts}
/>
```

### Custom validation

```tsx
const validateEmail = async (value: string) => {
  const errors = [];
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    errors.push(
      new ValidationResult(
        "email",
        "Email",
        ValidationMessage.Error,
        "Invalid email format",
        value
      )
    );
  }
  return errors;
};

<Editor
  type={Input.Email}
  title="Email"
  validateOnBlur
  customValidationOnBlur={validateEmail}
/>;
```

You can also wire `customValidationOnChange` and `customValidationOnSubmit` independently. Default rules (required, min/max length, numeric bounds, date bounds) run automatically when `validateDefaultOn*` flags are enabled.

### Responsive grid system

```tsx
<Row>
  <Editor
    title="Small field"
    sm={ColumnSize.Col12} // 100% on mobile
    md={ColumnSize.Col6} // 50% on tablet
    lg={ColumnSize.Col4} // 33% on desktop
    type={Input.Text}
  />
</Row>
```

`ColumnSize` is `Col1`–`Col12`. Breakpoints follow `ScreenSize` (`xs`, `sm`, `md`, `lg`, `xl`, `xxl`).

### Hooks

```tsx
import { useSmartConfig } from "smartr-ui";

function MyComponent() {
  const config = useSmartConfig(); // reactive read of the current config
  return <span>{config.components.alert.classes.success}</span>;
}
```

---

## UI Components

* **Alert** — Contextual feedback messages with customizable types and styling
* **Loading** — Loading indicators with different sizes and themes
* **Tooltip** — Informational tooltips with configurable positioning
* **CheckboxGroup** — Checkbox group management
* **Radio** — Radio button groups
* **Select** — Enhanced dropdowns with search and grouping
* **Label** — Read-only label component used by Editor and standalone
* **EditorButton** — Prepend/append buttons that integrate with `Editor`'s input group

```tsx
import { Tooltip, Loading, TooltipPosition } from "smartr-ui";

<Tooltip text="Helpful hint" position={TooltipPosition.Top}>
  <button>Hover me</button>
</Tooltip>

<Loading size="lg" />
```

---

## Configuration

### Global Configuration

```tsx
import { configManager } from "smartr-ui";

// Set global defaults
configManager.setConfig({
  behavior: {
    validation: {
      validateOnBlur: true,
      validateOnSubmit: true,
    },
    input: {
      thousandsSeparator: ".",
      decimalSeparator: ",",
      decimalPlaces: 2,
    },
  },
  components: {
    alert: {
      textAlign: "center",
      classes: {
        container: "alert",
        success: "alert-success",
        warning: "alert-warning",
        danger: "alert-danger",
        info: "alert-info",
      },
    },
    table: {
      behavior: {
        pageSize: 10,
        pageSizes: [10, 25, 50, 100],
      },
    },
  },
});
```

### Component-specific Configuration

```tsx
// Override configuration for specific component instance
<Alert 
  type={AlertType.Warning}
  config={{
    textAlign: "left",
    classes: {
      warning: "custom-warning-class",
    }
  }}
>
  Custom styled alert
</Alert>
```

### Using Configuration Files

```json
// smartR.config.json
{
  "behavior": {
    "input": {
      "thousandsSeparator": ".",
      "decimalSeparator": ","
    }
  },
  "components": {
    "alert": {
      "textAlign": "center"
    }
  }
}
```

---

## Utilities

The package re-exports a set of helpers from `Utils/utils` that are useful when integrating with custom components:

| Helper                     | Purpose                                                                |
| -------------------------- | ---------------------------------------------------------------------- |
| `applyMask`                | Apply a mask string to a value (date, money, phone, card, percent…)    |
| `getValueAsType`           | Convert any input value to `Integer` / `Float` / `Boolean` / `Array`   |
| `getValueType`             | Resolve the natural `ValueType` for a given `Input` type               |
| `getDefaultIcon`           | Default icon class name per input type (from current config)           |
| `getDefaultIconPosition`   | Default icon position (start / end) per input type                     |
| `getDefaultHasIcon`        | Whether the input type ships with an icon by default                   |
| `getDateFormatted`         | Format `Date` → `YYYY-MM-DD` for HTML date inputs                      |

Table-specific helpers are exported from `Table/util` and `Table/timezone`.

---

## TypeScript Support

Full TypeScript definitions included:

```tsx
import {
  EditorPropType,
  TableColumnProps,
  ValidationResult,
  AlertType,
  AlertConfig,
} from "smartr-ui";

// All props are fully typed
const editorProps: EditorPropType = {
  type: Input.Text,
  title: "Name",
  required: true,
};

const alertConfig: Partial<AlertConfig> = {
  textAlign: "center",
  classes: {
    success: "custom-success",
  },
};
```

---

## Theming and Customization

The library supports both light and dark themes and can be customized through CSS variables:

```css
/* Custom theme variables */
:root {
  --bs-primary: #your-color;
  --bs-success: #your-color;
  --bs-warning: #your-color;
  --bs-danger: #your-color;
  --bs-info: #your-color;
}
```

All components respect Bootstrap's theme variables and can be customized to match your design system.

---

## Real-world usage patterns

This library is battle-tested in production applications handling:

* **Complex forms** with dependent fields and conditional logic
* **Data-intensive tables** with sorting, filtering, and pagination
* **File management** with upload, preview, and download capabilities
* **Multi-step workflows** with validation at each stage
* **Multi-language applications** with configurable translations
* **Theme switching** between light and dark modes

---

## Project layout

```
src/
├── Alert/             Alert component & types
├── CheckboxGroup/     Grouped checkbox control
├── Column/ Row/ Container/   Bootstrap-style grid primitives
├── Editor/            Universal input (the central component)
├── EditorButton/      Prepend/append buttons for input groups
├── EditorInput/       Low-level <input>/<textarea>/<select> renderer
├── File/              File-input UI helper
├── Label/             Standalone label
├── Loading/           Spinner / loading indicator
├── Radio/             Radio control
├── Select/            Enhanced select with search/group/multi
├── Table/             Data table + pagination + timezone helpers
├── Tooltip/           Tooltip wrapper
├── Utils/             Shared formatting / mask / value helpers
├── config/            configManager + defaultConfig
├── hook/              useSmartConfig
├── ValidationResult.ts
└── types.ts           Public enums (Input, ColumnSize, ScreenSize…)
```

---

## Build & development

The package is built with Rollup and ships both CommonJS and ESM bundles plus generated `.d.ts` types.

```bash
npm install
npm run dev          # rollup watch mode
npm run build        # production build into dist/
npm run type-check   # tsc --noEmit
npm run lint         # eslint src
npm run test         # jest
npm pack             # build + create local .tgz tarball
```

Release scripts (publish to npm):

```bash
npm run release          # publish current version
npm run release:patch    # bump patch + publish
npm run release:minor    # bump minor + publish
npm run release:major    # bump major + publish
```

---

## Contributing

1. Clone the repository
2. Install dependencies: `npm install`
3. Develop: `npm run dev` (watch mode)
4. Build: `npm run build`
5. Test: `npm run test`

---

## License

MIT © Diego Martins

## Support

For issues and questions, please create an issue on the repository: [https://github.com/DiegoSDeveloper/smartr-ui/issues](https://github.com/DiegoSDeveloper/smartr-ui/issues)
