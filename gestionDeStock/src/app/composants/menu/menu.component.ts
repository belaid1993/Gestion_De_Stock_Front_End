import {Component, OnInit} from '@angular/core';
import {Menu} from "./menu";
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public menuProperties: Array<Menu> = [
    {
    id: "1",
    title: "Tableau de Bord",
    icon: "fas fa-chart-line",
    url: "",
    sousMenu: [
      {
        id: "11",
        title: "Vue d'ensemble",
        icon: "fas fa-chart-pie",
        url: ""
      },
      {
        id: "12",
        title: "Statistiques",
        icon: "fas fa-chart-bar",
        url: "statistiques"
      }
    ]
  },
    {
      id: "2",
      title: "Articles",
      icon: "fas fa-boxes",
      url: "",
      sousMenu : [
        {
          id: "21",
          title: "Articles",
          icon: "fas fa-boxes",
          url: "articles"
        },
        {
          id: "22",
          title: "Mouvements du stock",
          icon: "fab fa-stack-overflow",
          url: "mvtstk"
        }
      ]
    },

    {
      id: "3",
      title: "Clients",
      icon: "fas fa-users",
      url: "",
      sousMenu : [
        {
          id: "31",
          title: "Clients",
          icon: "fas fa-users",
          url: "clients"
        },
        {
          id: "32",
          title: "Commandes Clients",
          icon: "fas fa-shopping-basket",
          url: "commandesclient"
        }
      ]
    },
    {
      id: "4",
      title: "Fournisseurs",
      icon: "fas fa-users",
      url: "",
      sousMenu : [
        {
          id: "41",
          title: "Fournisseur",
          icon: "fas fa-users",
          url: "fournisseurs"
        },
        {
          id: "42",
          title: "Commandes Fournisseurs",
          icon: "fas fa-truck",
          url: "commandesfournisseur"
        }
      ]
    },
    {
      id: "5",
      title: "Parametrages",
      icon: "fas fa-cogs",
      url: "",
      sousMenu : [
        {
          id: "51",
          title: "Categories",
          icon: "fas fa-tools",
          url: ""
        },
        {
          id: "52",
          title: "Utilisateurs",
          icon: "fas fa-users-cog",
          url: ""
        }
      ]
    }



  ]

  constructor(private router:Router) {
  }

  ngOnInit(): void {
  }

  navigate(url?: string) {
    this.router.navigate([url])
  }
}
