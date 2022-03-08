from os import getenv

if getenv("PRODUCTION") != "True":
    import dotenv
    dotenv.load_dotenv()


DATABASE_URL: str = getenv("DATABASE_URL")
if DATABASE_URL is None:
    raise Exception("DATABASE_URL not set")


