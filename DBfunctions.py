import pymongo
import pandas as pd


class UniversityDB:
    def __init__(self):
        self.client = pymongo.MongoClient("mongodb://localhost:27017/")
        self.universityDB = self.client["University"]
        self.students = self.universityDB["students"]
        self.test = self.universityDB["probes"]

    def is_valid_login(self, email, password):
        query = {"email": email}
        student = self.students.find_one(query)
        if not student:
            return False
        if student.get("password") == password:
            return True
        return False

    def get_courses_list(self, email):
        query = {"email": email}
        student = self.students.find_one(query)
        return student.get("courses")

    def get_name(self, email):
        query = {"email": email}
        student = self.students.find_one(query)
        return student.get("name")

    def get_img(self, email):
        query = {"email": email}
        student = self.students.find_one(query)
        return student.get("photo")

    def get_emails_list(self):
        db_emails = self.students.find({}, {'_id': 0, 'email': 1})
        emails_list = []
        for x in db_emails:
            emails_list = emails_list + [x['email']]
        return emails_list

    def get_name_list(self):
        db_names = self.students.find({}, {'_id': 0, 'name': 1})
        names_list = []
        for x in db_names:
            names_list = names_list + [x['name']]
        return names_list

    def get_probes(self, email):
        query = {"email": email}
        student = self.test.find_one(query)
        return student.get("probes")

    def create_table(self):
        emails = self.get_emails_list()
        probes = []
        for e in emails:
            index = 0
            curr_probes = self.get_probes(e)
            for p in curr_probes:
                probes = probes + [e+","+str(index)]
                index = index+1

        return pd.DataFrame(0, index=probes, columns=emails)



