from django.db import models
# from django.contrib.auth.models import User

class Myreg(models.Model):
    companyName = models.CharField(max_length=100)
    driveDate = models.DateField()
    link = models.URLField()

    def __str__(self):
        return "%s" %(self.companyName)
    
    class Meta:
        db_table="job"


class resume(models.Model):
    file = models.FileField(upload_to='resumes/', default='default_file.pdf')