# Generated by Django 3.0.5 on 2020-08-04 07:41

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('userid', models.CharField(max_length=100, primary_key=True, serialize=False)),
                ('firstname', models.CharField(max_length=50)),
                ('lastname', models.CharField(max_length=50)),
                ('email', models.CharField(max_length=50)),
                ('password', models.CharField(max_length=50)),
                ('owner', models.CharField(max_length=2)),
            ],
        ),
        migrations.CreateModel(
            name='PetSitter',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('firstname', models.CharField(max_length=100)),
                ('lastname', models.CharField(max_length=100)),
                ('email', models.CharField(max_length=100)),
                ('password', models.CharField(max_length=100)),
                ('dog', models.CharField(max_length=100)),
                ('cat', models.CharField(max_length=100)),
                ('boarding', models.CharField(max_length=100)),
                ('house_sitting', models.CharField(max_length=100)),
                ('doggy_day_care', models.CharField(max_length=100)),
                ('dog_walking', models.CharField(max_length=100)),
                ('boarding_price', models.CharField(max_length=100)),
                ('house_sitting_price', models.CharField(max_length=100)),
                ('doggy_day_care_price', models.CharField(max_length=100)),
                ('dog_walking_price', models.CharField(max_length=100)),
                ('contact_info', models.CharField(max_length=100)),
                ('dog_size1', models.CharField(max_length=100)),
                ('dog_size2', models.CharField(max_length=100)),
                ('dog_size3', models.CharField(max_length=100)),
                ('dog_size4', models.CharField(max_length=100)),
                ('petSitterId', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='furryfur.User')),
            ],
        ),
        migrations.CreateModel(
            name='Address',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('street', models.CharField(max_length=30)),
                ('landmark', models.CharField(max_length=30)),
                ('pincode', models.CharField(max_length=30)),
                ('country', models.CharField(max_length=30)),
                ('state', models.CharField(max_length=30)),
                ('city', models.CharField(max_length=30)),
                ('userid', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='furryfur.User')),
            ],
        ),
    ]
