# Topics

## Installation

- Few words about npm
- Versions and keeping up to date

## Component

### Component intro

- What is a component?
- Single file components
- Generate multi file component
  - npm ng generate component pick-coffee/coffee-overview
  - delete test
  - update angular.json
- Importing components
- Standalone components vs NgModules
- Component style scope
- Component projection

### Component template

- Property binding
- Event handling
- Control flow @if, @for, @switch

### Component communication

- @Input() and @Output
- Two way data binding
  - npm ng generate component pick-coffee/coffee-input
  - add inputs and outputs to coffee-input
  - add one-way data binding
  - change one-way data binding to two way data binding
- Avoiding methods in templates
  - create method calls from template

## Pipes

- Common pipes
- Custom pipe

## Forms

### Template driven forms

- One field form
- Multiple field form and submit
- Validation

### Reactive forms

- One field form
- Multiple filed form and submit
- Validation

## Dependency injection

### Singleton services

- Creating singleton service
- Injecting using inject function
- Injection using constructor

### State management

- State management using singleton service
- How to use state management
- Component provider and local state management

## Routing

### Simple routing

- Setup routing
- Routing between two components

## HTTP communication

### Simple http communication

- Setup http
- Get data and manually subscribe
- Post data and manually subscribe

## Data transformation and reactivity

### RxJs

- What is an observable (pipeline)
- Manual subscription unsubscribing
- Async pipe
- Transforming data
- Combining observables

### Signals

- What is a signal (schrödinger's cat)
- How it compares to Observable
- Transforming data
- RxJs interactions

## Final recommendations

### Devtools

- Angular Language Service
- Browser extension
- ESLint, Prettier
