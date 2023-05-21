from django.db import models



# Create your models here.
class bouteille(models.Model):
    class MonEnum(models.TextChoices):
        OPTION_1 = 'PLASTIQUE1L'
        OPTION_2 = 'PLASTIQUE1.5L'
        OPTION_3 = 'PLASTIQUE0.5L'
        OPTION_4 = 'PLASTIQUE2L'
        OPTION_5=  'CANETTE'
    name = models.CharField(max_length=30)
    points=models.IntegerField(default=0)
    type = models.CharField(max_length=20, choices=MonEnum.choices)
    
    def __str__(self):
        return self.name+self.points+self.type
class recompense(models.Model):
    type = models.CharField(max_length=30)
    points=models.IntegerField(default=0)
    description=models.CharField(max_length=200,default="ENTRER LA DESCRIPTION")
    def __str__(self):
        return self.type+self.points
class rvm(models.Model):
    localisation = models.CharField(max_length=30)
    quantite=models.IntegerField(default=0)
    quantiteMax=models.IntegerField(default=0)
    bouteilles=models.ManyToManyField(bouteille,null=True,blank=True)
    def __str__(self):
        return self.type+self.points
class user(models.Model):
    username=models.CharField(max_length=30,unique=True)
    password=models.CharField(max_length=30)
    photo=models.CharField(max_length=100)
    role=models.CharField(max_length=100,default="SIMPLE_USER")
    recompenses=models.ManyToManyField(recompense,null=True,blank=True)
    def __str__(self):
        return self.username

class Image(models.Model):
    file = models.ImageField(upload_to='uploads/')
    
    
  
