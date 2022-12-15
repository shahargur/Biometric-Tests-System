from Server.DBfunctions import UniversityDB
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from app import face_varification, save_images


class SystemEvaluation:
    def __init__(self):
        self.db = UniversityDB()
        self.GA = 0
        self.GR = 0
        self.FA = 0
        self.FR = 0
        self.distance_table = self.db.create_table()

    def check_system(self):
        for e in self.distance_table.columns:
            distances = self.check_one(e)
            self.distance_table[e] = distances


    def check_one(self, email):
        results_arr = []
        for p in self.distance_table.index:
            probe = p.split(",")
            # probe[0] = email , probe[1] = num of probe
            probe_string = self.db.get_probes(probe[0])[int(probe[1])]
            gallery_string = self.db.get_img(email)
            save_images(probe_string, gallery_string)
            result = face_varification('img1.jpeg', 'img2.jpeg')
            results_arr = results_arr + [result['distance']]
            if result['verified']:
                if (probe[0] == email):
                    self.GA = self.GA + 1
                else:
                    self.FA = self.FA + 1
            else:
                if (probe[0] == email):
                    self.FR = self.FR + 1
                else:
                    self.GR = self.GR + 1
        return results_arr


a = SystemEvaluation()
a.check_system()
a.distance_table.to_csv("Performance.csv",  index=True)
print("GR: " + str(a.GR))
print("GE: " + str(a.GA))
print("FR: " + str(a.FR))
print("FA: " + str(a.FA))