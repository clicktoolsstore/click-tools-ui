# Click Tools UI Design System

Welcome to the Click Tools UI Design System repository. This design system is a collection of reusable components and UI tokens that provide a consistent and cohesive user interface for Click Tools applications. Whether you're building a new Click Tools project or enhancing an existing one, this design system is here to help you maintain a unified look and feel.

## Features

The Click Tools UI Design System includes the following key features:

1. **UI Tokens**: A set of foundational design tokens that serve as the building blocks for creating a consistent and visually appealing user interface.

2. **Web Components**: A library of React components meticulously crafted and styled with StitchesJS, making it easy to build responsive and aesthetically pleasing user interfaces.

3. **Stitches Provider Themed**: A Stitches provider with theming support, allowing you to customize the design system to match your project's unique branding and visual identity.

## Documentation

For detailed information and usage guidelines, please refer to our comprehensive documentation:

[**Click Tools UI Documentation**](https://clicktoolsstore.github.io/click-tools-ui/?path=/docs/home--docs)

## Getting Started

### Development

To start developing your apps and packages using the Click Tools UI Design System, follow these steps:

1. **Clone the Repository**: Clone this repository to your local machine using Git.

   ```bash
   git clone https://github.com/clicktoolsstore/click-tools-ui.git
   ```

2. Install Dependencies: Navigate to the cloned repository's directory and install the required dependencies.

```bash
cd click-tools-ui
npm install
```

1. Start Development: Start the development packages on dev mode. You can do this by running the following command in the root directory.

```bash
npm run dev
```

### Building

To create a local build you can run the command on the root directory:

```bash
npm run build
```

### Pre-publishing

The packages `@click-tools-ui/react` and `@click-tools-ui/tokens` are published on npm. To publish new versions of them, follow these steps:

1. Make the desired changes to the package(s).

2. Before committing, run the following commands from the root directory:

```bash
npm run changeset
```

This command will initiate a series of questions:

- Select packages to bump version.
- Select if any package needs a major bump.
- Select if any package needs a minor bump.
- Select if any package needs a patch bump.
- Type a summary to describe the changes.
- Confirm the change.

3. After successfully completing the steps above, a new file with the changelog preview will be generated in the `.changeset/<some-random-name>.md` file. You can review and refine the summary and improve it by specifying scopes/packages as needed.

4. After reviewing the changelog preview, update the package(s) `CHANGELOG.md` and bump the version with the following command:

```bash
npm run version-packages
```

5. After this step you can continue with your commit.
