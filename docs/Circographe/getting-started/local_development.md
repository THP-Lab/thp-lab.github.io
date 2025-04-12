---
sidebar_position: 2
title: Local Development
displayed_sidebar: circographeSidebar
---

# Local Development

This guide will help you set up Le Circographe for local development.

## Prerequisites

Before you begin, make sure you have installed:

- [Ruby](https://www.ruby-lang.org/en/) version 3.2.5
- [Rails](https://rubyonrails.org/) version 8.0.2 or above
- [SQLite 3](https://www.sqlite.org/index.html)
- [Git](https://git-scm.com/)

## Clone the Repository

```bash
git clone https://github.com/LeCircographe-asso/core.git
cd circographe
```

## Install Dependencies

```bash
bundle install
```

## Database Setup

```bash
rails db:create
rails db:migrate
rails db:seed # Optional: adds sample data
```

## Start the Development Server

```bash
rails server
```

Your application should now be running at [http://localhost:3000](http://localhost:3000).

## Running Tests

```bash
rails test
```

## Code Quality

We use RuboCop for code quality checks:

```bash
rubocop
```