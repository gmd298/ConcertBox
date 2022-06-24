class CreateEvents < ActiveRecord::Migration[7.0]
  def change
    create_table :events do |t|
      t.integer :musician_id
      t.integer :user_id
      t.string :city
      t.timestamps
    end
  end
end
