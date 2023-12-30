# Generated by Django 4.2.4 on 2023-12-30 07:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('job', '0008_resume'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='resume',
            name='myFile',
        ),
        migrations.AddField(
            model_name='resume',
            name='file',
            field=models.FileField(default='default_file.pdf', upload_to='resumes/'),
        ),
    ]
