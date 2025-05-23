import { Component } from "@angular/core";
import { ButtonComponent } from "../components/button.component";
import {
  CardComponent,
  CardContentComponent,
} from "../components/card.component";
import { CommonModule } from "@angular/common";
import {
  LucideAngularModule,
  Code,
  Laptop,
  PenTool,
  Server,
  Database,
  Layers,
  Mail,
  MapPin,
  Phone,
  House,
} from "lucide-angular";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    CardContentComponent,
    CardComponent,
    LucideAngularModule,
  ],
  templateUrl: "./index.page.html",
})
export default class HomeComponent {
  readonly Code = Code;
  readonly Laptop = Laptop;
  readonly PenTool = PenTool;
  readonly Server = Server;
  readonly Database = Database;
  readonly Layers = Layers;
  readonly Mail = Mail;
  readonly MapPin = MapPin;
  readonly Phone = Phone;
  readonly House = House;

  readonly expertise = [
    { name: "Angular", icon: "angular.svg" },
    { name: "React", icon: "react.svg" },
    { name: "Vue.js", icon: "vue.svg" },
    { name: "Next.js", icon: "nextjs.svg" },
    { name: "Analog", icon: "analog.svg" },
    { name: "Node.js", icon: "nodejs.svg" },
    { name: "Nest.js", icon: "nestjs.svg" },
    { name: "Express.js", icon: "expressjs.svg" },
    { name: "TypeScript", icon: "typescript.svg" },
    { name: "JavaScript", icon: "javascript.svg" },
    { name: "HTML5", icon: "html5.svg" },
    { name: "CSS3", icon: "css3.svg" },
    { name: "SASS", icon: "sass.svg" },
    { name: "Figma", icon: "figma.svg" },
    { name: "Contentful", icon: "contentful.svg" },
    { name: "Strapi", icon: "strapi.svg" },
  ];

  readonly copyRightYear = new Date().getFullYear();

  scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }
}
