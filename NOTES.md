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
  - npm ng generate component pick-coffee/coffee-list
- Avoiding methods in templates
  - create method calls from template
  - refactor inside pick-coffee/coffee-input using setters/getters
  - refactor inside pick-coffee/coffee-input using ngOnChanges

## Pipes

- Custom pipe
  - npm ng generate pipe totalPrice
- Common pipes
  - use decimal pipe to all prices

## Forms

### Template driven forms

- One field form
  - add one field input to coffee-input component with validation
- Multiple field form and submit
  - npm ng generate component order-coffee/order-overview
  - create shared directory and move files
  - add simple order overview form
  - add validations
  - add validation messages
  - add optional email

### Reactive forms

- Multiple field form and submit
  - npm ng generate component registration/registration-form
  - add simple registration form
  - add validations
  - add validation messages
  - add optional favorite

## Dependency injection

### Http and singleton services

- Setup server
  - npm i -D json-server
  - create server.json
  - update npm scripts
- Setup http
  - provideHttpClient
  - npm ng generate service core/coffee
  - inject HttpClient using c# constructor, primary constructor, inject function
- What is an observable (pipeline)
- Get data and manually subscribe
  - manually subscribe with unsubscribe
  - manually subscribe with takeUntil
  - manually subscribe with takeUntilDestroyed
- Get data with async pipe

### State management

- Creating singleton service
  - npm run ng generate service core/coffee-store
- State management using singleton service
  - save orderedCoffees using subject
  - save orderedCoffees using signal
- Facades
  - npm run ng generate service core/coffee-facade
  - move all logic from components to facade using signals
- Component provider and local state management
  - npm run ng generate service pick-coffee/coffee-list/coffee-list.state
  - add confirm order button
  - hold coffee-list state inside coffee-list.state service

## Routing

### Simple routing

- Setup routing
- Routing between two components

## Data transformation and reactivity

### RxJs

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
