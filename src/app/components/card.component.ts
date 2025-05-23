import { Component, input } from "@angular/core";

@Component({
  selector: "app-card",
  standalone: true,
  template: `
    <div
      [class]="
        'rounded-lg border bg-card text-card-foreground shadow-sm h-full ' +
        (className() || '')
      "
    >
      <ng-content></ng-content>
    </div>
  `,
})
export class CardComponent {
  className = input<string>("className");
}

@Component({
  selector: "app-card-header",
  standalone: true,
  template: `
    <div [class]="'flex flex-col space-y-1.5 p-6 ' + (className() || '')">
      <ng-content></ng-content>
    </div>
  `,
})
export class CardHeaderComponent {
  className = input<string>("className");
}

@Component({
  selector: "app-card-title",
  standalone: true,
  template: `
    <div
      [class]="
        'text-2xl font-semibold leading-none tracking-tight ' +
        (className() || '')
      "
    >
      <ng-content></ng-content>
    </div>
  `,
})
export class CardTitleComponent {
  className = input<string>();
}

@Component({
  selector: "app-card-description",
  standalone: true,
  template: `
    <div [class]="'text-sm text-muted-foreground ' + (className() || '')">
      <ng-content></ng-content>
    </div>
  `,
})
export class CardDescriptionComponent {
  className = input<string>();
}

@Component({
  selector: "app-card-content",
  standalone: true,
  template: `
    <div [class]="'p-6 pt-0 ' + (className() || '')">
      <ng-content></ng-content>
    </div>
  `,
})
export class CardContentComponent {
  className = input<string>();
}

@Component({
  selector: "app-card-footer",
  standalone: true,
  template: `
    <div [class]="'flex items-center p-6 pt-0 ' + (className() || '')">
      <ng-content></ng-content>
    </div>
  `,
})
export class CardFooterComponent {
  className = input<string>();
}
