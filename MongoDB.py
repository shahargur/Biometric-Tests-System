import pymongo
import base64

my_client = pymongo.MongoClient("mongodb://localhost:27017/")
my_db = my_client["University"]
my_collection = my_db["students"]
probe_collection = my_db["probes"]


def image_to_string(path):
    with open(path, "rb") as img_file:
        my_string = base64.b64encode(img_file.read())
    return my_string

student_list = [{"_id": 1, "name": "Shahar", "email": "shahar@gmail.com", "password": "123456", "courses": [1, 2],
                 "photo": image_to_string(r"photos\shahar-gur.jpg")},
                {"_id": 2, "name": "Shay", "email": "shay@gmail.com", "password": "123456", "courses": [1, 2],
                 "photo": image_to_string(r"photos\shaike.jpeg")},
                {"_id": 3, "name": "Yosi", "email": "yosi@gmail.com", "password": "123456", "courses": [3],
                 "photo": image_to_string(r"photos\yosi.jpeg")},
                {"_id": 4, "name": "Avi", "email": "avi@gmail.com", "password": "123456", "courses": [1, 6],
                 "photo": image_to_string(r"photos\avi-zetser.jpg")},
                {"_id": 5, "name": "Barak", "email": "barak@gmail.com", "password": "123456", "courses": [2],
                 "photo": image_to_string(r"photos\barak-zadiki.jpeg")},
                {"_id": 6, "name": "Chen", "email": "chen@gmail.com", "password": "123456", "courses": [4, 6, 8],
                 "photo": image_to_string(r"photos\chen-cohen.jpeg")},
                {"_id": 7, "name": "Efrat", "email": "efrat@gmail.com", "password": "123456", "courses": [5, 7],
                 "photo": image_to_string(r"photos\efrat-gilboa.jpg")},
                {"_id": 8, "name": "Gal", "email": "gal@gmail.com", "password": "123456", "courses": [3, 4, 7],
                 "photo": image_to_string(r"photos\gal-rish.jpg")},
                {"_id": 9, "name": "Nevo", "email": "nevo@gmail.com", "password": "123456", "courses": [2, 8],
                 "photo": image_to_string(r"photos\nevo-shtraus.jpeg")},
                {"_id": 10, "name": "Adi", "email": "adi@gmail.com", "password": "123456", "courses": [1, 5, 6],
                 "photo": image_to_string(r"photos\adi-maik.jpeg")},
                {"_id": 11, "name": "Sariel", "email": "sariel@gmail.com", "password": "123456", "courses": [7, 8],
                 "photo": image_to_string(r"photos\sariel-shamshian.JPG")},
                {"_id": 12, "name": "Rotem", "email": "rotem@gmail.com", "password": "123456", "courses": [1, 2, 4],
                 "photo": image_to_string(r"photos\rotem-lavie.jpeg")},
                {"_id": 13, "name": "Batya", "email": "batya@gmail.com", "password": "123456", "courses": [3, 5],
                 "photo": image_to_string(r"photos\batya.jpeg")},
                {"_id": 14, "name": "Omri", "email": "omri@gmail.com", "password": "123456", "courses": [3, 8],
                 "photo": image_to_string(r"photos\omri-hadadi.jpeg")},
                {"_id": 15, "name": "Or", "email": "or@gmail.com", "password": "123456", "courses": [2, 6, 7],
                 "photo": image_to_string(r"photos\or-armoni.jpeg")},
                {"_id": 16, "name": "Peleg", "email": "peleg@gmail.com", "password": "123456", "courses": [4, 5],
                 "photo": image_to_string(r"photos\peleg-hatuka.jpeg")},
                {"_id": 17, "name": "Dvir", "email": "dvir@gmail.com", "password": "123456", "courses": [1, 7, 8],
                 "photo": image_to_string(r"photos\dvir-saudyan.jpeg")},
                {"_id": 18, "name": "Shiran", "email": "shiran@gmail.com", "password": "123456", "courses": [2, 5, 8],
                 "photo": image_to_string(r"photos\shiran-talala.jpg")},
                {"_id": 19, "name": "Yair", "email": "yair@gmail.com", "password": "123456", "courses": [1, 3, 5],
                 "photo": image_to_string(r"photos\yair-zederman.jpg")},
                {"_id": 20, "name": "Lior", "email": "lior@gmail.com", "password": "123456", "courses": [1, 2, 7],
                 "photo": image_to_string(r"photos\lior.jpeg")}
               ]

probes_list = [ {"_id": 1, "email": "shahar@gmail.com","probes": [image_to_string("probes\shahar1.jpg"), image_to_string("probes\shahar2.jpg"), image_to_string("probes\shahar3.jpg")]},
                {"_id": 2, "email": "shay@gmail.com", "probes": [image_to_string("probes\shay1.jpg"), image_to_string("probes\shay2.jpeg"), image_to_string("probes\shay3.jpeg")]},
                {"_id": 3, "email": "yosi@gmail.com", "probes": [image_to_string(r"probes\yosi1.jpeg"), image_to_string(r"probes\yosi2.jpeg"), image_to_string(r"probes\yosi3.jpeg")]},
                {"_id": 4, "email": "avi@gmail.com", "probes": [image_to_string(r"probes\avi1.jpeg"), image_to_string(r"probes\avi2.jpeg"), image_to_string(r"probes\avi3.jpeg")]},
                {"_id": 5, "email": "barak@gmail.com", "probes": [image_to_string(r"probes\barak1.jpeg"), image_to_string(r"probes\barak3.jpeg")]},
                {"_id": 6, "email": "chen@gmail.com",  "probes": [image_to_string(r"probes\chen1.jpeg"), image_to_string(r"probes\chen2.jpeg")]},
                {"_id": 7, "email": "efrat@gmail.com", "probes": [image_to_string(r"probes\efrat1.jpg"), image_to_string(r"probes\efrat2.jpg"), image_to_string(r"probes\efrat3.jpg")]},
                {"_id": 8, "email": "gal@gmail.com", "probes": [image_to_string(r"probes\gal1.jpeg"), image_to_string(r"probes\gal2.jpeg"), image_to_string(r"probes\gal3.jpeg")]},
                {"_id": 9, "email": "nevo@gmail.com", "probes": [image_to_string(r"probes\nevo1.jpeg"), image_to_string(r"probes\nevo2.jpeg")]},
                {"_id": 10, "email": "adi@gmail.com", "probes": [image_to_string(r"probes\adi1.jpeg"), image_to_string(r"probes\adi2.jpeg")]},
                {"_id": 11, "email": "sariel@gmail.com", "probes": [image_to_string(r"probes\sariel1.JPG"), image_to_string(r"probes\sariel2.JPG")]},
                {"_id": 12, "email": "rotem@gmail.com", "probes": [image_to_string(r"probes\rotem1.jpeg"), image_to_string(r"probes\rotem2.jpeg")]},
                {"_id": 13, "email": "batya@gmail.com", "probes": [image_to_string(r"probes\batya1.jpeg"), image_to_string(r"probes\batya2.jpeg")]},
                {"_id": 14, "email": "omri@gmail.com", "probes": [image_to_string(r"probes\hadadi1.jpeg"), image_to_string(r"probes\hadadi2.jpeg")]},
                {"_id": 15, "email": "or@gmail.com", "probes": [image_to_string(r"probes\or1.jpeg"), image_to_string(r"probes\or2.jpeg"), image_to_string(r"probes\or3.jpeg")]},
                {"_id": 16, "email": "peleg@gmail.com", "probes": [image_to_string(r"probes\peleg1.jpeg"), image_to_string(r"probes\peleg2.jpeg"), image_to_string(r"probes\peleg3.jpeg")]},
                {"_id": 17, "email": "dvir@gmail.com",  "probes": [image_to_string(r"probes\dvir1.jpeg"), image_to_string(r"probes\dvir2.jpeg")]},
                {"_id": 18, "email": "shiran@gmail.com", "probes": [image_to_string(r"probes\shiran1.jpg"), image_to_string(r"probes\shiran2.jpeg"), image_to_string(r"probes\shiran3.jpeg"), image_to_string(r"probes\shiran4.jpeg")]},
                {"_id": 19, "email": "yair@gmail.com", "probes": [image_to_string(r"probes\yair1.jpeg"), image_to_string(r"probes\yair2.jpeg"), image_to_string(r"probes\yair3.jpeg"), image_to_string(r"probes\yair4.jpeg")]},
                {"_id": 20, "email": "lior@gmail.com", "probes": [image_to_string("probes\lior1.jpeg"), image_to_string("probes\lior2.jpeg")]}
                ]

x = my_collection.insert_many(student_list)
y = probe_collection.insert_many(probes_list)

