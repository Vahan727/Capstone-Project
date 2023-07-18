"""descriptive message

Revision ID: 2a3b7e730f98
Revises: 03a921d44dc9
Create Date: 2023-07-18 13:32:01.522642

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '2a3b7e730f98'
down_revision = '03a921d44dc9'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('books', schema=None) as batch_op:
        batch_op.alter_column('publication_date',
               existing_type=sa.VARCHAR(),
               type_=sa.Integer(),
               existing_nullable=False)
        batch_op.alter_column('image',
               existing_type=sa.VARCHAR(),
               nullable=True)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('books', schema=None) as batch_op:
        batch_op.alter_column('image',
               existing_type=sa.VARCHAR(),
               nullable=False)
        batch_op.alter_column('publication_date',
               existing_type=sa.Integer(),
               type_=sa.VARCHAR(),
               existing_nullable=False)

    # ### end Alembic commands ###
