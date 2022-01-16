require 'rails_helper'
RSpec.feature "Creating Articles" do
    scenario "A user creates a new article" do
        #visit root page
        visit "/"
        #click on new article
        click_link "New Article"
        #fill in title
        fill_in "Title", with: "creating a blog"
        #fill in body
        fill_in "Body", with: "Lorem Ipsum"
        #create article
        click_button "Create Article"
        #expect Article has been created
        expect(page).to have_content("Article has been created")
        #expect articles path
        expect(page.current_path).to eq(articles_path)


    end
end