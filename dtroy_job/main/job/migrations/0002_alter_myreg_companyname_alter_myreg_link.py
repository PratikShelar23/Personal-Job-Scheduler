# Generated by Django 4.2.4 on 2023-12-21 06:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('job', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='myreg',
            name='companyName',
            field=models.CharField(max_length=255),
        ),
        migrations.AlterField(
            model_name='myreg',
            name='link',
            field=models.URLField(),
        ),
    ]