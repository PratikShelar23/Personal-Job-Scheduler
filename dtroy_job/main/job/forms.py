from django import forms
from job.models import Myreg

class Company(forms.ModelForm):
    class Meta:
        model = Myreg
        fields = ['companyName', 'driveDate', 'link']
