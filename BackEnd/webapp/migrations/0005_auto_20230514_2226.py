# Generated by Django 3.2.19 on 2023-05-14 21:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('webapp', '0004_alter_rvm_bouteilles_alter_user_recompenses'),
    ]

    operations = [
        migrations.CreateModel(
            name='Image',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('file', models.ImageField(upload_to='uploads/')),
            ],
        ),
        migrations.AlterField(
            model_name='rvm',
            name='bouteilles',
            field=models.ManyToManyField(blank=True, null=True, to='webapp.bouteille'),
        ),
    ]