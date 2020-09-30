# Ian Chen-Adamczyk (with Maddy Andersen and Saqif Abedin)
# SoftDev
# K05 -- Teamwork, but Better This Time: prints a random name from the team selected by the user
# 2020-09-30

import random

KREWES = {
    'orpheus': ['ERIC', 'SAUVE', 'JONATHAN', 'PAK', 'LIAM', 'WINNIE', 'KELLY', 'JEFFREY', 'KARL', 'ISHITA', 'VICTORIA', 'BENJAMIN', 'ARIB', 'AMELIA', 'CONSTANCE', 'IAN'],
    'rex': ['ANYA', 'DUB-Y', 'JESSICA', 'ALVIN', 'HELENA', 'MICHELLE', 'SHENKER', 'ARI', 'STELLA', 'RENEE', 'MADELYN', 'MAC', 'RYAN', 'DRAGOS'],
    'endymion': ['JASON', 'DEAN', 'MADDY', 'SAQIF', 'CINDY', 'YI LING', 'RUOSHUI', 'FB', 'MATTHEW', 'MAY', 'ERIN', 'MEIRU']
}

team = input("Pick a team from orpheus, rex, or endymion: ").lower()
while team not in KREWES:
    team = input("Please enter either orpheus, rex, or endymion: ").lower()

print(random.choice(KREWES[team]))
