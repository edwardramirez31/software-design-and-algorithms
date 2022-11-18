# Angular SOLID Principles Review

Code Repository https://github.com/angular/angular

## Single Responsibility Principle

- Each part of the app is divided into a structure of folders and modules that obey a role or responsibility

  - For instance, the `@angular/core` package is divided so that app utils, tests, render logic, sanitization and internationalization components go to their respective folder

- `Renderer2` class in `packages\core\src\render\api.ts` at line 65 contains only the abstract method definitions that this entity is responsible to handle.
  - It has method definitions to create, destroy, modify elements of the DOM
  - It also handles styling and HTML element attributes
  - It just cares about the DOM, it does not need to care about handling state, forms, authentication or any other important thing in a web app

## Open / Closed Principle:

- To create different types of controls, they inherit from the abstract class AbstractControl located in `packages\forms\src\model\abstract_model.ts` at line 346.

- That way they do not modify existing classes, but for each control or behavioral it is extended and new classes are created

- For instance:

  - FormRecord in `packages\forms\src\model\form_group.ts` at line 634.
  - FormArray in `packages\forms\src\model\form_array.ts` at line 99.

- The other strategy used to add new behavior without modifying the existing one is the composition, used in `packages\router\src\router.ts`, at line 367, for the router class which gets private UrlTree fields

## Liskov Substitution Principle

- `Renderer2` class in `packages\core\src\render\api.ts` is used as abstraction and passed down to other classes that use the abstraction `packages\core\test\acceptance\component_spec.ts`, at line 422, and not the implementation.

- That way, the program expects the implementation to work as expected and the same as the parent and child classes

- Method `createPreloadLinkTag` at `packages\common\src\directives\ng_optimized_image\preload-link-creator.ts`, at line 45, gets the Renderer2 as the abstraction instead of a high or low level module

## Interface Segregation Principle

- Code was divided into multiple interfaces at `packages\core\src\sanitization\bypass.ts`, from line 23 to 58, so that the interface represents a safe value in different environments, like HTML, CSS, JavaScript and URLs.

- The abstract method of the `SafeValueImpl` class at `packages\core\src\sanitization\bypass.ts`, at line 61, is implemented everywhere the class is inherited below (line 72 to 96)

- This way there are no empty method implementations or there are not any method that throws an error if the implementation does not make sense.

## Dependency Inversion

- `packages\core\src\di\index.ts` declares modules that provide dependency injection container services

- `packages\core\src\di\injectable.ts` exports `@Injectable` decorator that users can use to declare classes or entities that they want to inject as private attributes and apply composition later on

- `NgIf` class directive in `packages\common\src\directives\ng_if.ts` at line 162 injects a reference to the HTML element container through dependency injection in the constructor.
