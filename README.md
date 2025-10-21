````markdown
# SmartR — React form & data components

A pragmatic component kit for building robust, data-heavy React apps: forms, tables, layout, validation, file inputs, and more — with strong TypeScript types and real-world ergonomics.

---

## Key Features

- **Typed form controls** with rich props (masking, icons, validation hooks, number/date/text modes, grouped selects, file inputs, etc.)
- **Powerful data table** with sorting, selection modes, badges, card/table view, pagination and auto data-loading
- **Grid layout primitives** (`Row`, `Column`, responsive sizes) for consistent page structure
- **Validation system** with built-in rules and custom async hooks on blur/change/submit
- **TypeScript first** with full type definitions
- **Bootstrap compatible** responsive design

---

## Installation

```bash
npm install @diegodeveloper/smartr
```
````

**Peer dependencies:** `react` (^16.8.0 || ^17.0.0 || ^18.0.0), `react-dom`

---

## Quick Start

```tsx
import React from "react";
import { Row, Editor, Input, ColumnSize } from "@diegodeveloper/smartr";

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

### Editor - The Universal Input Component

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

### Table - Advanced Data Display

```tsx
import { Table, AlignType } from "@diegodeveloper/smartr";

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

### Layout Components

```tsx
import { Row, Column, Container } from "@diegodeveloper/smartr";

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

## Advanced Features

### Custom Validation

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

### Responsive Grid System

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

---

## UI Components

- **Alert** - Contextual feedback messages
- **Loading** - Loading indicators
- **Tooltip** - Informational tooltips
- **CheckboxGroup** - Checkbox group management
- **Radio** - Radio button groups
- **Select** - Enhanced dropdowns

---

## Configuration

```tsx
import { configManager } from "@diegodeveloper/smartr";

// Set global defaults
configManager.setConfig({
  defaultDateFormat: "dd/MM/yyyy",
  validation: {
    validateOnBlur: true,
    validateOnChange: false,
  },
});
```

---

## TypeScript Support

Full TypeScript definitions included:

```tsx
import {
  EditorPropType,
  TableColumnProps,
  ValidationResult,
} from "@diegodeveloper/smartr";

// All props are fully typed
const editorProps: EditorPropType = {
  type: Input.Text,
  title: "Name",
  required: true,
};
```

---

## Real-World Usage Patterns

This library is battle-tested in production applications handling:

- **Complex forms** with dependent fields and conditional logic
- **Data-intensive tables** with sorting, filtering, and pagination
- **File management** with upload, preview, and download capabilities
- **Multi-step workflows** with validation at each stage

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

For issues and questions, please [create an issue](https://github.com/DiegoSDeveloper/smartr/issues).

```
