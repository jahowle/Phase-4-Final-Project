# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "🌱 Seeding spices..."


Neighbor.destroy_all
Location.destroy_all
Partner.destroy_all
Category.destroy_all
Need.destroy_all
Donor.destroy_all
Donation.destroy_all

10.times do
    Location.create(
        name: Faker::Address.city
    )
end


Category.create(
    name: "Housing"
)

Category.create(
    name: "Furnishings"
)

Category.create(
    name: "Transport"
)

Category.create(
    name: "Miscellaneous"
)

Category.create(
    name: "Bills"
)

Category.create(
    name: "Groceries"
)

Category.create(
    name: "Clothing"
)



Partner.create(
    name: "Boys and Girls Club",
    location_id: Location.pluck(:id).sample
    )
    Partner.create(
        name: "United Way",
        location_id: Location.pluck(:id).sample
        )
        Partner.create(
            name: "Pink Daisy Project",
            location_id: Location.pluck(:id).sample
            )
            Partner.create(
                name: "Share Fund, Inc",
                location_id: Location.pluck(:id).sample
                )
                Partner.create(
                    name: "Bridges Homeward",
                    location_id: Location.pluck(:id).sample
                    )
                                        




10.times do

    Neighbor.create(
        name: Faker::Name.name,
        bio: Faker::Lorem.paragraph,
        partner_id: Partner.pluck(:id).sample
        )

end

30.times do
    Need.create(
        description: ["Help with food", "Help with bills", "Help with car", "Help with textbooks", "Help with medical", "Help with shelter", "Help with clothing", "Help with transport", "Help with furnishings", "Help with groceries"].sample,
        amount: rand(1..400),
        neighbor_id: Neighbor.pluck(:id).sample,
        category_id: Category.pluck(:id).sample,
        funded: false
    )

end

30.times do
    Donor.create(
        name: Faker::Name.name
    )

end

30.times do
    Donation.create(
        amount: rand(1..400),
        need_id: Need.pluck(:id).sample,
        donor_id: Donor.pluck(:id).sample
    )
end

puts "✅ Done seeding!"
