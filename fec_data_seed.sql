DROP TABLE IF EXISTS properties CASCADE;
DROP TABLE IF EXISTS customers CASCADE;
DROP TABLE IF EXISTS reservations;
DROP TABLE IF EXISTS comments;

CREATE TABLE customers (
    cust_id SERIAL PRIMARY KEY NOT NULL,
    name_firstlast TEXT
);

CREATE TABLE properties (
    prop_id SERIAL PRIMARY KEY NOT NULL,
    title TEXT,
    price TEXT,
    specs TEXT,
    about TEXT,
    prop_space TEXT,
    guest TEXT,
    other TEXT,
    number_street TEXT,
    us_state TEXT,
    zip TEXT,
    amenities JSON NOT NULL
);


CREATE TABLE reservations (
    prop_id INT,
    first_name TEXT,
    last_name TEXT,
    guest_num INT,
    startdate TEXT,
    enddate TEXT

);

CREATE TABLE comments (
    first_name TEXT,
    last_name TEXT,
    prop_id INT,
    stars TEXT,
    comment TEXT
);

INSERT INTO properties (title, price, specs, about, prop_space, guest, other, number_street, us_state, zip, amenities) 
                VALUES ('Treehouse',
                '325', 
                '2 guests - 1 bedroom - 1 bed - 1 bath', 
                'Welcome to the Treehouse - the ultimate Colorado getaway. Perched high in the trees with panoramic views, you’ll never want to leave. This completely remodeled, octagon treehouse is just 15 minutes from most attractions in Colorado Springs and 5 minutes from the famous Pikes Peak Highway and gorgeous hiking trails - you are right in the middle of plenty to do and see while also being tucked away in your own little forest paradise.', 
                'Although not actually built on trees, we call this place the treehouse because of its unique design as an octagon house perched high on a pedestal surrounded by the forest - you’ll feel like you’re in a treehouse. Upon entering the Treehouse you will find the beautiful living space with comfortable seating, wood burning stove, and floor to ceiling windows to take in the views of the ever-changing Colorado landscape.', 
                'The driveway is steep. We don’t want you to be surprised when you arrive. We recommend bringing a vehicle with good clearance and good tires, preferably 4 wheel drive. When you get to the driveway, put your car in 1st gear and and don’t pause before driving up and you’ll be just fine!', 
                'The Treehouse is ideal for mature adults who are looking for a peaceful getaway to connect with each other and with nature. We do have neighbors who are full time residents, and we care deeply about ensuring the area remains quiet and peaceful for them. We do not allow parties or gatherings above the specified number of guests in the reservation. Please plan accordingly.',
                '1313 mockingbird lane',
                'VA',
                '22306', 
                '{"ameniGroups":
                  [
                    {"title": "Scenic Views", "values": ["Mountain view", "Ocean View"]}, 
                    {"title": "Bathroom", "values": ["Bathtub", "Hair dryer", "Cleaning products", "Shampoo", "Conditioner", "Body soap", "Bidet", "Hot water", "Shower gel"]},
                    {"title": "Bedroom and Laundry", "values": ["Free washer, In unit","Free dryer, In unit","Essentials: Towels, bed sheets, soap, and toilet paper", "Hangers", "Bed linens", "Extra pillows and blankets", "Iron", "Clothing storage"]},
                    {"title": "Entertainment", "values": ["TV"]},
                    {"title": "Heating and Cooling", "values": ["Window AC unit", "Indoor fireplace", "Ceiling fan", "Portable fans", "Central heating"]},
                    {"title": "Home Safety", "values": ["Doorbell camera", "Smoke alarm", "Carbon monoxide alarm", "Fire extinguisher", "First aid kit"]},
                    {"title": "Internet and Office", "values": ["Wifi", "Dedicated workspace"]},
                    {"title": "Kitchen and Dining", "values": ["Kitchen", "Refrigerator", "Cooking basics", "Dishes and silverware", "Freezer", "Dishwasher", "Stove", "Oven", "Hot water kettle", "Coffee maker", "Wine glasses", "Toaster", "Baking sheet", "Dining table"]},
                    {"title": "Location Features", "values": ["Laundromat nearby"]},
                    {"title": "Outdoor", "values": ["Shared patio or balcony", "Private backyard, fully fenced", "Fire pit", "Outdoor furniture", "Outdoor dining area"]},
                    {"title": "Parking and Facilities", "values": ["Free parking on premises", "Free street parking", "Single level home"]},
                    {"title": "Services", "values": ["Breakfast", "Self check-in", "Lockbox"]}
                  ]
                }');
INSERT INTO customers (name_firstlast) VALUES ('Jane Doe');
INSERT INTO reservations (prop_id, first_name, last_name, guest_num, startdate, enddate) VALUES ('1', 'Bob', 'Testor', '3','20221230', '20221231');
INSERT INTO comments (first_name, last_name, prop_id, stars, comment) VALUES ('Erin', 'Smith', '1', '5','This place is great!');
INSERT INTO comments (first_name, last_name, prop_id, stars, comment) VALUES ('Dolores', 'Mercer', '1', '1','Would never stay here again!');
INSERT INTO comments (first_name, last_name, prop_id, stars, comment) VALUES ('Kevin', 'Wright', '1', '5','Awesome!');
INSERT INTO comments (first_name, last_name, prop_id, stars, comment) VALUES ('Erick', 'Martinez', '1', '3','I mean, it is okay I guess!');
