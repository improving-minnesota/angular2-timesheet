# Basic Components

## Lab Goal
Create a new component that displays a list of projects that are hard-coded into the component.

## Imports
```js
import { CommonModule, Component, OnInit, NgModule } from '@angular/core';
```

## Example
### Component TypeScript
```js
@Component({
  selector: 'app-say-hello',
  templateUrl: './hello.component.html'
})
export class SayHelloComponent {
  public name: string;
}
```

### Component Template
```html
<h3 *ngIf="name">Hello {{name}}!</h3>
```

### Usage
```html
<app-say-hello></app-say-hello>
```

## Files
- `src/app/project/Project.ts`
- `src/app/project/project-list/project-list.component.ts`
- `src/app/project/project-list/project-list.component.html`
- `src/app/project/project.module.ts`
- `src/app/app.component.html`
- `src/app/app.module.ts`
