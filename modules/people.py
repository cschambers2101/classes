class People:

    def __init__(self):
        self.People = []

    def addPerson(self, person):
        self.People.append(person)

    def listPeople(self):
        for person in self.People:
            print("Name: " + person.firstName + " " + person.surname)
            print("Age: " + str(person.age))
