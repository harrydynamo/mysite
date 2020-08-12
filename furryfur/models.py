from django.db import models

# Create your models here.
class User(models.Model):
    userid = models.CharField(max_length=100, primary_key=True)
    firstname = models.CharField(max_length=50)
    lastname = models.CharField(max_length=50)
    email = models.CharField(max_length=50)
    password = models.CharField(max_length=50)
    owner = models.CharField(max_length=2)

class Address(models.Model):
    userid = models.ForeignKey(User, on_delete=models.CASCADE)
    street = models.CharField(max_length=30)
    landmark = models.CharField(max_length=30)
    pincode = models.CharField(max_length=30)
    country = models.CharField(max_length=30)
    city = models.CharField(max_length=30)

class PetSitter(models.Model):
    # petSitterId = models.CharField(max_length=100, primary_key=True)
    petSitterId = models.ForeignKey(User, on_delete=models.CASCADE)

    dog = models.CharField(max_length=2)
    cat = models.CharField(max_length=2)

    boarding = models.CharField(max_length=2)
    house_sitting = models.CharField(max_length=2)
    doggy_day_care = models.CharField(max_length=2)
    dog_walking = models.CharField(max_length=2)

    boarding_price = models.CharField(max_length=2)
    house_sitting_price = models.CharField(max_length=2)
    doggy_day_care_price = models.CharField(max_length=2)
    dog_walking_price = models.CharField(max_length=2)

    contact_info = models.CharField(max_length=2)

    dog_size1 = models.CharField(max_length=2)
    dog_size2 = models.CharField(max_length=2)
    dog_size3 = models.CharField(max_length=2)
    dog_size4 = models.CharField(max_length=2)

    description = models.CharField(max_length=600)