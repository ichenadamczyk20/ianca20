# Team Windows 9 (Andrew Jiang, Benjamin Gallai, Ian Chen-Adamczyk)
# SoftDev
# K07 -- Divine your Destiny: reads occupations and weighted probabilities from a .csv file and randomly selects an occupation using the weighted probabilities.
# 2020-10-02

import random
def csv_format(csv):
    with open(csv, 'r') as in_stream:
        ls = in_stream.read()

    ls = ls.split('\n')

    for i in range(len(ls)):
        if ls[i] == '':
            ls.pop(i)

    return ls

def randomOccupation(dictionary):
    percentageSum = sum(dictionary.values())
    percentageRandom = random.random() * percentageSum
    percentageIndex = 0
    for key in dictionary:
        if percentageIndex + dictionary[key] > percentageRandom:
            return key
        else:
            percentageIndex += dictionary[key]

if __name__ == "__main__":
    inp = "y"
    jobs = csv_format("occupations.csv")
    jdict = {}

    del jobs[0]
    del jobs[-1]
    for i in jobs:
        if '"' not in i:
            cur = i.split(",")
        else:
            cur = i[1:].split('",')

        jdict[cur[0]] = float(cur[1])

    while inp == "y":
        print(randomOccupation(jdict))
        inp = str(input("Next Occupation? (y/n)")).lower()
