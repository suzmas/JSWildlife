class CreateSightings < ActiveRecord::Migration[5.0]
  def change
    create_table :sightings do |t|
      t.datetime :date
      t.decimal :lat
      t.decimal :long
      t.string :region
      t.references :animal, foreign_key: true

      t.timestamps
    end
  end
end
