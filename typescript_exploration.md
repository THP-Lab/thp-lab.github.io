# TypeScript and Internationalization (i18n) Audit

## Current State Assessment

### TypeScript Implementation
- The project is already using TypeScript in some capacity:
  - `.tsx` files are present in the `src/pages` directory
  - Types are defined in `src/data/projects.tsx` for data structures like `Project` and `TagType`
  - Utility functions in `src/utils/jsUtils.ts` use TypeScript generics
  - Docusaurus config includes TypeScript JSDoc annotations

### Internationalization (i18n)
- Basic i18n support is configured in `docusaurus.config.js`:
  - Default locale is set to "en"
  - Only English is currently supported
- `translate` function from Docusaurus is used in `projects.tsx` for tag labels and descriptions
- No comprehensive translation files or multi-language support

## Recommendations for TypeScript Implementation

### 1. Full TypeScript Migration
- Create a proper `tsconfig.json` file for the project:
```json
{
  "compilerOptions": {
    "target": "es2020",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}
```

### 2. Type-Safe Component Props
- Create a dedicated `types` directory for shared type definitions
- Define prop interfaces for all components:
```typescript
// src/types/showcase.ts
export interface ShowcaseCardProps {
  project: Project;
  isFavorite: boolean;
  onToggleFavorite?: (projectId: string) => void;
}
```

### 3. Type-Safe Context API
- Implement stronger typing for any React Context:
```typescript
// src/context/ShowcaseContext.tsx
import React, { createContext, useContext, useState } from 'react';
import { Project, TagType } from '../types/showcase';

interface ShowcaseContextType {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedTags: TagType[];
  toggleTag: (tag: TagType) => void;
  filteredProjects: Project[];
}

const ShowcaseContext = createContext<ShowcaseContextType | undefined>(undefined);

export const ShowcaseProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  // Implementation
};

export const useShowcaseContext = (): ShowcaseContextType => {
  const context = useContext(ShowcaseContext);
  if (context === undefined) {
    throw new Error('useShowcaseContext must be used within a ShowcaseProvider');
  }
  return context;
};
```

### 4. API Type Safety
- If the site communicates with external APIs, define types for request/response data
- Consider using TypeScript utility types like `Partial<T>`, `Pick<T>`, and `Omit<T>`

## Recommendations for i18n Implementation

### 1. Multi-Language Support
- Extend Docusaurus i18n configuration to support multiple languages:
```javascript
// In docusaurus.config.js
i18n: {
  defaultLocale: 'en',
  locales: ['en', 'fr', 'es'],
  localeConfigs: {
    en: {
      label: 'English',
      direction: 'ltr',
    },
    fr: {
      label: 'Français',
      direction: 'ltr',
    },
    es: {
      label: 'Español',
      direction: 'ltr',
    },
  },
},
```

### 2. Extract All Hardcoded Text
- Replace hardcoded strings with translation functions:
```typescript
// Before
function ShowcaseHeader() {
  return (
    <section className="margin-top--lg margin-bottom--lg text--center">
      <Heading as="h1">{TITLE}</Heading>
      <p>{DESCRIPTION}</p>
    </section>
  );
}

// After
import {translate} from '@docusaurus/Translate';

function ShowcaseHeader() {
  return (
    <section className="margin-top--lg margin-bottom--lg text--center">
      <Heading as="h1">
        {translate({
          id: 'showcase.header.title',
          message: 'THP-Lab projects showcase',
        })}
      </Heading>
      <p>
        {translate({
          id: 'showcase.header.description',
          message: 'List of projects people from THP-lab are working on',
        })}
      </p>
    </section>
  );
}
```

### 3. Create Translation JSON Files
- Run `npm run write-translations` to generate translation files in the `i18n` folder
- Translate content by editing the generated JSON files for each locale

### 4. Language Switcher
- Add a language dropdown in the navbar:
```javascript
// In docusaurus.config.js
navbar: {
  items: [
    // ...existing items
    {
      type: 'localeDropdown',
      position: 'right',
    },
  ],
},
```

### 5. Localized Route Structure
- Create localized versions of documentation in `/i18n/<locale>/docusaurus-plugin-content-docs/...`
- Use the Docusaurus CLI to manage translations: `npm run start -- --locale fr`

## Implementation Strategy

### Phase 1: TypeScript Foundation
1. Add TypeScript dependencies and configuration
   ```bash
   npm install --save-dev typescript @types/react @types/node @types/react-dom
   ```
2. Create `tsconfig.json` file
3. Convert existing `.js` files to `.ts` and `.jsx` to `.tsx` incrementally

### Phase 2: Type System Enhancement
1. Create centralized type definitions
2. Add prop types to all components
3. Implement strong typing for contexts and state management

### Phase 3: i18n Setup
1. Configure multi-language support in Docusaurus
2. Extract all hardcoded text with translation functions
3. Generate initial translation files

### Phase 4: Content Translation
1. Begin translating core UI elements
2. Translate documentation content
3. Test website in all supported languages

## Benefits
- **TypeScript**: Improved code reliability, better developer experience, easier maintenance
- **i18n**: Expanded global reach, improved accessibility, cultural inclusivity

## Monitoring and Maintenance
- Use TypeScript's strict mode to catch type errors early
- Implement translation workflow for new content
- Set up automated checks for missing translations
- Consider translation management tools for larger projects
