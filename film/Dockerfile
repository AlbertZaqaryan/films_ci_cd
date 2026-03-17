FROM python:3.11

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

WORKDIR /app

COPY requirements.txt .

RUN pip install --upgrade pip
RUN pip install -r requirements.txt

COPY . .

# Добавляем скрипт ожидания
COPY wait-for-db.sh .
RUN chmod +x wait-for-db.sh

EXPOSE 8000

# Используем скрипт ожидания перед запуском Django
CMD ["sh", "-c", "./wait-for-db.sh db python manage.py migrate --noinput && python manage.py runserver 0.0.0.0:8000"]