# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


bookmarks = Bookmark.create([
    {
        headline: "New to Tech? Try out these free courses!",
        web_url: "www.freecourses.com", 
        description: "Free courses offered to people entering the technology industry.",
        favorite: false,
        keywords: ["technology", "career", "free"],
        category_id: 1
    },
    {
        headline: "Build Your Portfolio Like a Pro!",
        web_url: "www.portfoliohelp.com", 
        description: "Tips and secrets to building a really good portfolio.",
        favorite: false,
        keywords: ["portfolio", "career", "resume"],
        category_id: 1
    },
    {
        headline: "New Vegan Recipes For Those Who Cannot Cook",
        web_url: "www.veganrecipes.com", 
        description: "Vegan recipe blog",
        favorite: true,
        keywords: ["vegan", "food", "recipes"],
        category_id: 2
    },
    {
        headline: "Pets for Adoption Near You",
        web_url: "www.petsmart.com", 
        description: "Website that shows pets in your area up for adoption.",
        favorite: true,
        keywords: ["pets", "cats", "dogs"],
        category_id: 3

    },
])

categories = Category.create([
    {
        name: "Career",
        user_id: 1
    },
    {
        name: "Food",
        user_id: 1
    },
    {
        name: "Miscellaneous",
        user_id: 1
    }
])

users = User.create([
    {
        name: "Adri",
        email: "adriana@gmail.com",
        password: "password!"
    }
])

