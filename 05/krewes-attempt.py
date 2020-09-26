import random

KREWES = {
    'orpheus': ['ERIC', 'SAUVE', 'JONATHAN', 'PAK', 'LIAM', 'WINNIE', 'KELLY', 'JEFFREY', 'KARL', 'ISHITA', 'VICTORIA', 'BENJAMIN', 'ARIB', 'AMELIA', 'CONSTANCE', 'IAN'],
    'rex': ['ANYA', 'DUB-Y', 'JESSICA', 'ALVIN', 'HELENA', 'MICHELLE', 'SHENKER', 'ARI', 'STELLA', 'RENEE', 'MADELYN', 'MAC', 'RYAN', 'DRAGOS'],
    'endymion': ['JASON', 'DEAN', 'MADDY', 'SAQIF', 'CINDY', 'YI LING', 'RUOSHUI', 'FB', 'MATTHEW', 'MAY', 'ERIN', 'MEIRU']
}

def getRandomStudent(team = None):
    """Returns a random student from the team with the name given by the variable 'team' (or from all teams if 'team' is not specified)."""
    
    if (type(team) is str):
        if (team in KREWES.keys()):
            teamArray = KREWES[team]
        else:
            raise KeyError("team key could not be found")
    else:
        teamArray = []
        for i in KREWES.values():
            teamArray += i
    
    return random.choice(teamArray)
