from datetime import date, datetime


class Person:

    def __init__(self, firstname, surname, dob):
        self.firstName = firstname
        self.surname = surname
        self.dob = dob
        self.age = self.calcAge(self.dob)

    def __str__(self):
        print(self.firstName, " ", self.surname)

    def calcAge(self, born):
        dob = datetime.strptime(born, '%d/%m/%Y')
        today = date.today()
        return today.year - dob.year - ((today.month, today.day) < (dob.month, dob.day))
