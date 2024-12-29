from selenium import webdriver

driver = webdriver.Chrome()
driver.get("https://example.com/login")
username = driver.find_element_by_name("username")
username.send_keys("testuser")
password = driver.find_element_by_name("password")
password.send_keys("password123")
driver.find_element_by_name("submit").click()
assert "Dashboard" in driver.title
driver.quit()
