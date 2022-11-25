from django.db import models
from django.db.models import ForeignKey


# Create your models here.

class Artist(models.Model): # cada modelo hereda de django.db.models.Model
    name = models.CharField(max_length=200)
    genre = models.CharField(max_length=200)

    def __str__(self):
        return self.name

class Album(models.Model):
    artist: ForeignKey = models.ForeignKey(Artist, on_delete=models.CASCADE)
    name = models.CharField(max_length=200)
    pub_date = models.DateField('date published')

    def __str__(self):
        return f"{self.artist} - {self.name}"