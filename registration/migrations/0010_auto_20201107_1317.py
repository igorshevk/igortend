# Generated by Django 3.1.1 on 2020-11-07 03:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('registration', '0009_auto_20201106_1028'),
    ]

    operations = [
        migrations.AddField(
            model_name='roles',
            name='role_value',
            field=models.IntegerField(default=1, verbose_name='role_value'),
        ),
        migrations.AlterField(
            model_name='brands',
            name='expenditure',
            field=models.FloatField(default=0, verbose_name='expenditure'),
        ),
        migrations.AlterField(
            model_name='brands',
            name='reward_sent',
            field=models.FloatField(default=0, verbose_name='reward_sent'),
        ),
        migrations.AlterField(
            model_name='brands',
            name='status',
            field=models.IntegerField(default=1, verbose_name='status'),
        ),
        migrations.AlterField(
            model_name='brands',
            name='unclaimed_funds',
            field=models.FloatField(default=0, verbose_name='unclaimed_funds'),
        ),
        migrations.AlterField(
            model_name='creators',
            name='earnings',
            field=models.FloatField(default=0, verbose_name='earnings'),
        ),
        migrations.AlterField(
            model_name='creators',
            name='rewards',
            field=models.FloatField(default=0, verbose_name='rewards'),
        ),
        migrations.AlterField(
            model_name='creators',
            name='status',
            field=models.IntegerField(default=1, verbose_name='status'),
        ),
        migrations.AlterField(
            model_name='staffs',
            name='status',
            field=models.IntegerField(default=1, verbose_name='status'),
        ),
    ]
