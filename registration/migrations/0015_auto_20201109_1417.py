# Generated by Django 3.1.1 on 2020-11-09 04:17

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('registration', '0014_auto_20201109_1406'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='brands',
            name='birthday',
        ),
        migrations.RemoveField(
            model_name='staffs',
            name='birthday',
        ),
    ]
