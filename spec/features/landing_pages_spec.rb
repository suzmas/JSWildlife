require 'rails_helper'

RSpec.feature "LandingPages", type: :feature do
  context 'Going to website' do
    Steps 'Viewing homepage' do
      Given 'I am on the homepage' do
        visit '/'
      end
      Then 'I can see a list of animals' do
        expect(page).to have_content("Animals")
      end
      And 'I can see links to new, edit, and delete animals' do
        expect(page).to have_link("New Animal")
      end
    end
  end
end
