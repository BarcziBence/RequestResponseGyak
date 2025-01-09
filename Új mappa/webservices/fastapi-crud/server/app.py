from fastapi import FastAPI, status
from .routers import home, checks, procedures
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "*"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(
    home.router,
    tags=['home']
    )
app.include_router(
    checks.router,
    prefix='/checks',
    tags=['checks']
    )
app.include_router(
    procedures.router,
    prefix='/procedures',
    tags=['procedures']
    )



# TODO: when it is database time implement HATEOAS