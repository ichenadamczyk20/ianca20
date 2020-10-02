# Team Windows 9 (Andrew Jiang, Benjamin Gallai, and Ian Chen-Adamczyk)
# SoftDev
# K06 -- Learnination Through Amalgamation: refactoring our team's K05 submissions to make a better K05.
# 2020-10-02

import random

# A dictionary storing team members in the format <team name> -> [member list]
KREWES = {
    'orpheus': ['ERIC', 'SAUVE', 'JONATHAN', 'PAK', 'LIAM', 'WINNIE', 'KELLY', 'JEFFREY', 'KARL', 'ISHITA', 'VICTORIA', 'BENJAMIN', 'ARIB', 'AMELIA', 'CONSTANCE', 'IAN'],
    'rex': ['ANYA', 'DUB-Y', 'JESSICA', 'ALVIN', 'HELENA', 'MICHELLE', 'SHENKER', 'ARI', 'STELLA', 'RENEE', 'MADELYN', 'MAC', 'RYAN', 'DRAGOS'],
    'endymion': ['JASON', 'DEAN', 'MADDY', 'SAQIF', 'CINDY', 'YI LING', 'RUOSHUI', 'FB', 'MATTHEW', 'MAY', 'ERIN', 'MEIRU']
}

# Asks user for a team name and ensures the input is lowercase
team = input("Pick a team from orpheus, rex, or endymion: ").lower()
# Checks if the input is an existing team's name
# Until it is, it will ask the user for a team name again.
while team not in KREWES: 
    team = input("Please enter either orpheus, rex, or endymion: ").lower()
# Selects and outputs a random team member from the given team name
print(random.choice(KREWES[team]))
