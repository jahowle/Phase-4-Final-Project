# Phase 4 Final Project

# About

This is the repository for my Phase 4 Final Project for Flatiron School.

This repository if for an app called NeighborShare.

NeighborShare allows a user to donate money to Neighbors in their area for a variety of needs.

# Installation

- Fork and Clone this repository
- Open the project folder and run

```
bundle install
```

- Then launch the Rails server by running

```
rails s
```

- Then migrate and seed the database by running

```
rails db:migrate db:seed
```

- Then, in a new terminal, launch the front-end react client by running

```
npm start --prefix client
```

# Architecture

The database contains tables for Categories, Donations, Donors, Locations, Needs, Neighbors, Partners, and Users along with routes for each.

# Use

When using the app, a user can signup to be a partner that is affiliated with a partner organization. This gives them the ability to create Needs, Categories, Neighbors, Locations, and other Partner Organizations. It also allows the user to fund needs and delete needs that they themselves have created on behalf of a Neighbor.

# Contributing

This project was for a coding course and as such will not be maintained or updated in the future.
