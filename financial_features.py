import pandas as pd
import yfinance as yf

def get_stock_data(ticker, start_date, end_date):
    """
    This function returns historical stock data for a given ticker and date range.
    """
    stock_data = yf.download(ticker, start_date, end_date)
    return stock_data

def get_stock_price(ticker):
    """
    This function returns the current price of a given stock ticker.
    """
    stock_info = yf.Ticker(ticker)
    stock_price = stock_info.info['regularMarketPrice']
    return stock_price

def calculate_returns(stock_data):
    """
    This function calculates the daily returns for a given stock data.
    """
    daily_returns = stock_data['Adj Close'].pct_change()
    return daily_returns

def calculate_moving_average(stock_data, window):
    """
    This function calculates the moving average for a given stock data and window size.
    """
    moving_average = stock_data['Adj Close'].rolling(window=window).mean()
    return moving_average

def calculate_bollinger_bands(stock_data, window):
    """
    This function calculates the Bollinger Bands for a given stock data and window size.
    """
    rolling_mean = stock_data['Adj Close'].rolling(window=window).mean()
    rolling_std = stock_data['Adj Close'].rolling(window=window).std()
    upper_band = rolling_mean + 2*rolling_std
    lower_band = rolling_mean - 2*rolling_std
    return upper_band, lower_band

def get_stock_info(ticker):
    """
    This function returns basic information about a given stock ticker.
    """
    stock_info = yf.Ticker(ticker)
    info_dict = {
        'Name': stock_info.info['longName'],
        'Sector': stock_info.info['sector'],
        'Industry': stock_info.info['industry'],
        'Market Cap': stock_info.info['marketCap'],
        '52-Week High': stock_info.info['fiftyTwoWeekHigh'],
        '52-Week Low': stock_info.info['fiftyTwoWeekLow']
    }
    return info_dict
