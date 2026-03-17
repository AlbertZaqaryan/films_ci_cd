from django.db import models

# Create your models here.
class Film(models.Model):

    name = models.CharField(max_length=100)
    image = models.ImageField(upload_to='film_images')
    video = models.FileField(upload_to='film_videos')

    def __str__(self):
        return self.name