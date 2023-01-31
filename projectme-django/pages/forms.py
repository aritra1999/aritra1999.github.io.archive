from django import forms


class ContactForm(forms.Form):
    contact_name = forms.CharField(required=True, label='')
    contact_email = forms.EmailField(required=True, label='')
    content = forms.CharField(
        required=True,
        widget=forms.Textarea,
        label=''
    )

    contact_name.widget.attrs.update({'placeholder': 'Enter Name'})
    contact_email.widget.attrs.update({'placeholder': 'Enter Email'})
    content.widget.attrs.update({'placeholder': 'Enter Message'})
