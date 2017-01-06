require 'rails_helper'

RSpec.feature "CreateAnimals", type: :feature do
  context 'Making a new animal on new animal page' do
    Steps 'Creating an animal' do
      Given 'I am on the new animal page' do
        visit '/animals/new'
      end
      Then 'I fill in the animal form fields' do
        fill_in 'animal[name]', with: 'Cat'
        fill_in 'animal[latin_name]', with: 'Catus'
        fill_in 'animal[kingdom]', with: 'Feline'
      end
      And 'I can submit the new animal' do
        click_button 'Create Animal'
      end
    end
  end
end
