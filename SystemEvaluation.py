from Server.DBfunctions import UniversityDB
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from app import face_varification, save_images


class SystemEvaluation:
    def __init__(self):
        self.db = UniversityDB()
        col = [0, 0.1, 0.2, 0.3, 0.35, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
        row = ["GA", "FR", "GR", "FA", "fail"]
        self.sum_table = pd.DataFrame(0, index=row, columns=col)
        self.distance_table = self.db.create_table()

    def check_system(self):
        for e in self.distance_table.columns:
            distances = self.check_one(e)
            self.distance_table[e] = distances

    def update_sum_table(self, result, real_id, claimed_id):
        for threshold in self.sum_table.columns:
            if result['distance'] == "unknown":
                self.sum_table.at['fail', threshold] = self.sum_table.at['fail', threshold] + 1
            else:
                if real_id == claimed_id:
                    if result['distance'] > threshold:
                        self.sum_table.at['FR', threshold] = self.sum_table.at['FR', threshold] + 1
                    else:
                        self.sum_table.at['GA', threshold] = self.sum_table.at['GA', threshold] + 1
                else:
                    if result['distance'] > threshold:
                        self.sum_table.at['GR', threshold] = self.sum_table.at['GR', threshold] + 1
                    else:
                        self.sum_table.at['FA', threshold] = self.sum_table.at['FA', threshold] + 1

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
            self.update_sum_table(result, probe[0], email)
        return results_arr


a = SystemEvaluation()
a.check_system()
a.distance_table.to_csv("Distances.csv", index=True)
a.sum_table.to_csv("Performance.csv", index=True)

