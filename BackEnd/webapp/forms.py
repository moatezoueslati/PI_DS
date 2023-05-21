from django import forms
from .models import bouteille


class CRUDFORM(forms.ModelForm):
    name = forms.CharField(widget=forms.TextInput(attrs={
        "class": "form-control",
        "placeholder": "name"
    }))
    
    class Meta:
        model =bouteille

        fields = [
            'name'
        ]