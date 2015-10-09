# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


Bench.destroy_all

Bench.create(description:'Sutro Tower', lat:37.755458, lng:-122.452600);
Bench.create(description:'SF Botanical Garden', lat:37.767798, lng:-122.469839);
Bench.create(description:'Crissy Field Bench', lat:37.804041, lng:-122.465791);
Bench.create(description:'Mission Bay Bench', lat:37.769332, lng:-122.385732);
Bench.create(description:'Hawk Hill Bench', lat:37.826338, lng:-122.499010);
Bench.create(description:'Ocean Beach Bench', lat:37.769968, lng:-122.511233);
Bench.create(description:'Bench by the Bay Bridge', lat:37.809268, lng:-122.368452);
