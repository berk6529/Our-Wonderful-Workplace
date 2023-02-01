import { Component, Inject } from '@angular/core';


@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html',
  styleUrls: ['./fetch-data.component.css'],
})
export class FetchDataComponent {
  nameList!: Array<names>;


  ngOnInit() {

    this.nameList = [
      { FirstName: "Brad", LastName: "Berkobien", JobTitle: "Senior Software Engineer, Production Support", Overview: "I Like to solve things", RouterLink: "/brad" },
      { FirstName: "Keith", LastName: "Morton", JobTitle: "Software Engineer, Production Support", Overview: "The Man, The Myth, The legend", RouterLink: "/keith" },
      { FirstName: "Ahsan", LastName: "Ahmad", JobTitle: "Software Engineer", Overview: "Really good developer", RouterLink: "/ahsan" },
      { FirstName: "George", LastName: "Fernandez", JobTitle: "Software Engineer", Overview: "Super rad ", RouterLink: "/george" },
      { FirstName: "Andres", LastName: "Lopez", JobTitle: "Software Engineer", Overview: "Was over being a CST", RouterLink: "/andres" },
    ]

  }
}

interface names {
  FirstName: string,
  LastName: string,
  JobTitle: string,
  Overview: string,
  RouterLink: string
}
